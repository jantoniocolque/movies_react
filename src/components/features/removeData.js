export default async function removeData (endPoint){
    const settings = {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }

    let response = await fetch(endPoint,settings);
    let data = await response.json();
    return data;
}
