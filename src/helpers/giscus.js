'use strict'

module.exports = ({ data: { root } }) => {
  const pageName = root.page.component.name
  return pageName === 'java' || pageName === 'dotnet' || pageName === 'typescript'
}
