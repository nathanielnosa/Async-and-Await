class asynLibrary{
  // Make a GET HTTP Request
  async get(url){
    const respond = await fetch(url);
    const getData = await respond.json();
    return getData;
  }
  // Make a POST HTTP Request
  async post(url, data){
    const respond = await fetch(url,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      data: JSON.stringify(data)
    });
    const postData = await respond.json();
    return postData;
  }

  // Make a PUT HTTP Request
  async put(url, data){
    const respond = await fetch(url,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      data: JSON.stringify(data)
    });
    const postData = await respond.json();
    return postData;
  }

  // Make a DELETE HTTP Request
  async delete(url, data){
    const respond = await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json'
      },
    });
    const postData = await 'Resource Deleted';
    return postData;
  }
}