export default  async function getData (endPoint){
    let response = await fetch(endPoint);
    let data = await response.json();
    return data;
}