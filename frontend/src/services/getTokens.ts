export const getAccessToken = async () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        '@fullstackAfiliados:accessToken'
      )}`,
    },
  }
}
