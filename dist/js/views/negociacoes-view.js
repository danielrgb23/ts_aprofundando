export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
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
    update() {
        this.elemento.innerHTML = this.template();
    }
}
