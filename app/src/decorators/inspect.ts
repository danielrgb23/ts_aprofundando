
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`)
        console.log(`------ parametros: ${JSON.stringify(args)}`)
        const retorn = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorn)}`)
        return retorn;
    }

    return descriptor;
}
