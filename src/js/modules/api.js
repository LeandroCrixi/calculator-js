const getData = async (callback) => {
    try {
        const res = await fetch('./src/data/data.json')
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json()
        callback(data)
    } catch (error) {
        console.error(error);
    }
}

export { getData }