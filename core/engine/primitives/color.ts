import { colord, extend } from 'colord'
import type { Colord } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { APCAcontrast, sRGBtoY } from 'apca-w3'
import type { UmbraAdjusted } from '../types'
import { defaultSettings } from '../defaults'

extend([mixPlugin])

type ColorRawRange = {
  foreground: string | Colord
  background: string | Colord
  readability?: number
  iterations?: number
  power?: number
}

interface IncreaseContrastUntil {
  color: Colord
  contrast?: Colord
  iterations?: number
  power?: number
  condition: (newColor: Colord, iterations?: number) => boolean
}

interface MoveAwayFrom {
  color: Colord
  contrast?: Colord
  val: number
}

const stored = {
  readability: defaultSettings.readability || 11,
  iterations: defaultSettings.iterations || 15,
  power: defaultSettings.power || 1
}

function apcaContrast(fg: string | Colord, bg: string | Colord) {
  const fgc = colord(fg).toRgb()
  const bgc = colord(bg).toRgb()
  return APCAcontrast(sRGBtoY([fgc.r, fgc.g, fgc.b]), sRGBtoY([bgc.r, bgc.g, bgc.b]))
}

export const getReadability = (fg: string | Colord, bg: string | Colord) => {
  return Math.abs(apcaContrast(fg, bg))
}

export const getReadable = ({
  foreground,
  background,
  readability,
  iterations,
  power
}: ColorRawRange) => {
  const color = colord(foreground)
  const contrast = colord(background)

  const lol = increaseContrastUntil({
    color,
    contrast,
    iterations: iterations || stored.iterations,
    power: 1, //power || stored.power,
    readability: readability || stored.readability,
    condition: (c) => {
      const current = getReadability(c, contrast)
      console.log("rex condition: ", current);
      
      return current > (readability || stored.readability)
    }
  })

  // console.log("rex: ", {
  //   background: color.toHex(),
  //   foreground: lol.toHex(),
  //   passedforg: contrast.toHex(),
  // });
  
  return lol
}

export function increaseContrastUntil({
  color,
  contrast,
  condition,
  iterations = 15,
  readability,
  power = 1
}: IncreaseContrastUntil) {
  let newColor = color
  let count = 0
  if(condition(newColor, count)) return newColor
  while (!condition(newColor, count) && count < iterations) {
    count += 1
    console.log("rex: ", power)
    newColor = increaseContrast({
      val: power,
      color: newColor,
      contrast
    })
  }

  console.log("rex: ", {
    old: color.toHex(),
    new: newColor.toHex(),
    readability: readability
  })
  return newColor
}

const increaseContrast = ({ color, contrast, val = 1 }: MoveAwayFrom) => {
  const same = contrast ? color.isDark() === contrast.isDark() : true
  return same
    ? color.isDark()
      ? color.lighten(val)
      : color.darken(val)
    : contrast?.isDark()
      ? color.lighten(val)
      : color.darken(val)
}

export function mostReadable(color: Colord, colors: Colord[]) {
  const readable = colors.map((c) => Math.abs(getReadability(color, c)))
  const index = readable.indexOf(Math.max(...readable))
  return colors[index]
}

export const pickContrast = (color: Colord, scheme: UmbraAdjusted) => {
  return mostReadable(color, [
    scheme.background || colord('white'),
    scheme.foreground || colord('black')
  ])
}

export function colorMix(from: string | Colord, to: string | Colord, percent = 50) {
  const tinyFrom = colord(from)
  const tinyTo = colord(to)
  return colord(tinyFrom).mix(tinyTo, percent / 100)
}
