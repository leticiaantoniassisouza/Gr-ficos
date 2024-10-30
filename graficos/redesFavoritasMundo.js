import { getCSS } from "./common.js"


async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
}
    // código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais que os usuários mais gostam',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },

// código omitido
}

redesFavoritasMundo()