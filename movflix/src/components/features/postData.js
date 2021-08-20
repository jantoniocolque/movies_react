export default async function postData (endPoint,payload){
    const settings = {
        method: 'POST',
        body:JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    }

    let response = await fetch(endPoint,settings);
    let data = await response.json();
    return data;
}

module.exports= postData;