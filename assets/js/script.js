
  AOS.init();
const playbtn=document.getElementById('playbtn')
const exitbtn=document.getElementById('exitbtn')
const video=document.getElementById('video')
playbtn.addEventListener('click',()=>{
  video.style.display="flex"
})
exitbtn.addEventListener('click',()=>{
  video.style.display="none"
})
const plusbtninfo=document.getElementById('plusbtninfo')
const plusbtncareer=document.getElementById('plusbtncareer')
const plusbtnlegal=document.getElementById('plusbtnlegal')
const infoul=document.getElementById('info_ul')
const careerul=document.getElementById('career_ul')
const legalul=document.getElementById('legal_ul')
const minusbtninfo=document.getElementById('minusbtninfo')
const minusbtncareer=document.getElementById('minusbtncareer')
const minusbtnlegal=document.getElementById('minusbtnlegal')
plusbtninfo.addEventListener('click',()=>{
  infoul.style.height="150px"
  minusbtninfo.style.display="block"
  plusbtninfo.style.display="none"
})
plusbtncareer.addEventListener('click',()=>{
  careerul.style.height="150px"
  minusbtncareer.style.display="block"
  plusbtncareer.style.display="none"
})
plusbtnlegal.addEventListener('click',()=>{
  legalul.style.height="150px"
  minusbtnlegal.style.display="block"
  plusbtnlegal.style.display="none"
})
minusbtninfo.addEventListener('click',()=>{
  infoul.style.height="0px"
 plusbtninfo.style.display="block"
 minusbtninfo.style.display="none"
})
minusbtncareer.addEventListener('click',()=>{
  careerul.style.height="0px"
  plusbtncareer.style.display="block"
  minusbtncareer.style.display="none"
})
minusbtnlegal.addEventListener('click',()=>{
  legalul.style.height="0px"
  plusbtnlegal.style.display="block"
  minusbtnlegal.style.display="none"
})

