export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ parametros: ${JSON.stringify(args)}`);
        const retorn = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorn)}`);
        return retorn;
    };
    return descriptor;
}
