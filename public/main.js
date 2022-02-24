console.log("这是ajax demo");

getCss.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET","./style.css")
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //  创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 查到头部里面
        document.head.appendChild(style)
      }else{
        console.log("失败了");
      }
    }  
  }
  request.send()
}

getJs2.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','./2.js')
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2xx 还是失败4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      }else{
        console.log("失败了");
      }
    }  
  }
  request.send()
}

getHTML3.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','3.html')
  request.onreadystatechange =() =>{
    if (request.readyState === 4) {
      if (request.status >=200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      }else{
        console.log("失败了");
      }
    }
  }
  request.send()
}

getXML4.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','4.xml')
  request.onreadystatechange =() =>{
    if (request.readyState === 4) {
      if (request.status >=200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName("warning")[0].textContent
        console.log(text.trim());
      }else{
        console.log("失败了");
      }
    }
  }
  request.send()
}

getJSON5.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','5.json')
  request.onreadystatechange =() =>{
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        myName.textContent = object.name
      }else{
        console.log("失败了");
      }
    }
  }
  request.send()
}

let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET',`/page${n+1}`)
  request.onreadystatechange =() =>{
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement("li")
          li.textContent = item.id
          xxx.appendChild(li)
        });
      n += 1 
      }else{
        console.log("失败了");
      }
    }
  }
  request.send()
}