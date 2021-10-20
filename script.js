const btnCalculateWeight=document.getElementById('btnCalculateWeight')
const text=document.getElementById('text')
const startingImage=document.getElementById('startingPic')
const results=document.getElementById('results')
const result=document.getElementById('result')
const resultOfPlanet=document.getElementById('resultOfPlanet')
const resultInCircle=document.getElementById('resultInCircle')
const mass1=document.getElementById('mass')

let select
const planetImage =document.getElementById('planetImage')
function getSelectedValue(){
    select=document.getElementById('planets').value 
}

btnCalculateWeight.addEventListener('click',e=>{
    
    if(text.value==''){
        startingImage.remove()
        result.style.display='block'
        result.style.margin='150px 280px'
        result.innerHTML='Mass is required'
    }
    else{
        let mass 
        if(select=='none'){
            startingImage.remove()
            result.style.display='block'
            planetImage.remove()
            result.style.margin='130px 280px'
            result.innerHTML='Please! Select planet'
        }
        else{
            if(select=='mercury'){
                mass=text.value*3.7 
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/mercury.png"
                resultOfPlanet.innerHTML='Mass of object on Mercury'
            }
            else if(select=='venus'){
                mass=text.value*8.87
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/venus.png"
                resultOfPlanet.innerHTML='Mass of object on Venus'
            }
            else if(select=='earth'){
                mass=text.value*9.798
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/earth.png"
                resultOfPlanet.innerHTML='Mass of object on Earth'
            }
            else if(select=='mars'){
                mass=text.value*3.71
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/mars.png"
                resultOfPlanet.innerHTML='Mass of object on Mars'
            }
            else if(select=='jupiter'){
                mass=text.value*24.92
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/jupiter.png"
                resultOfPlanet.innerHTML='Mass of object on Jupiter'
            }
            else if(select=='saturn'){
                mass=text.value*3.7
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/saturn.png"
                resultOfPlanet.innerHTML='Mass of object on Saturn'
            }
            else if(select=='uranus'){
                mass=text.value*10.44
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/uranus.png"
                resultOfPlanet.innerHTML='Mass of object on Uranus'
            }
            else if(select=='neptune'){
                mass=text.value*11.15
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/neptune.png"
                resultOfPlanet.innerHTML='Mass of object on Neptune'
            }
            else if(select=='pluto'){
                mass=text.value*0.58
                startingImage.remove()
                result.style.display='block'
                planetImage.src="./images/pluto.png"
                resultOfPlanet.innerHTML='Mass of object on Pluto'
            }
            
            let mass2=mass.toFixed(3)
            mass1.innerHTML=mass2+'N'
        }
    }
})

