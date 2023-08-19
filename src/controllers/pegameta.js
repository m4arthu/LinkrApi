import axios from "axios";

export async function pegandolink(req, res) {
    let url = req.query.url;

    if (!url) {
        return res.status(400).json({ error: 'Parâmetro URL ausente' });
      }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
    }
    try {
        const response = await axios.get(`${url}`);
        res.send(response.data);
    } catch (error) {
        console.error('Erro ao buscar metadados:', error);
        res.status(500).send(error.message);
    }
}