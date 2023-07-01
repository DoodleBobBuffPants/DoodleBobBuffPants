const useBasePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const basePath = import.meta.env.BASE_URL;

export default useBasePath;
export { basePath };
