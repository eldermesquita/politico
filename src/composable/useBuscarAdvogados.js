
import Advogados from '@/dados/advogados.json'

// Mapa indexado por id para acesso O(1)
const advogadosMap = new Map(Advogados.map((adv) => [adv.id, adv]))

/**
 * Retorna um advogado pelo ID
 * @param {number} id
 * @returns {object|undefined}
 */
export function getAdvogado(id) {
  return advogadosMap.get(id)
}

/**
 * Retorna uma lista de advogados pelos IDs
 * @param {number[]} ids
 * @returns {object[]}
 */
export function getAdvogados(ids) {
  return ids.map((id) => advogadosMap.get(id)).filter(Boolean)
}
