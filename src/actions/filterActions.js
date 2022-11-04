export const setKeywordFilter = (keyword = '') => {
  return  {
    type: 'FILTERS/SET_KEYWORD',
    keyword,
  }
}