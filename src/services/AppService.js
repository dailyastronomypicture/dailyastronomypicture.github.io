export async function api() {
    try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=38PatzLbhhNbbnvSsGYsAZyWOfW6V7ON8oFKe3P2')
        return res.json()
    } catch (error) {
        console.log(error)   
        throw error 
    }
}