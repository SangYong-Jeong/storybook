// global args를 적용할 수 있게 해주는 파일

export const parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'blue', value: '#00f' },
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}