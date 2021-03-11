export default class AviasalesService {
    _apiBase = "https://front-test.beta.aviasales.ru";

    async getResource(url) {
        const res = await fetch(this._apiBase + url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getSearchId() {
        return await this.getResource('/search');
    }
    async getTickets(searchId) {
        return await this.getResource(`/tickets?searchId=${searchId}`);
    }
}