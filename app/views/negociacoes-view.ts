export class NegociacoesView {

    private elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }
    template(): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">QUANTIDADE</th>
                    <th scope="col">VALOR</th>
                </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
        `;
    }

    update(): void {
        this.elemento.innerHTML = this.template();
    }
}