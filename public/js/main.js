const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault();  //yeah page ko reload one se rokega on clicking serch


    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9647c4651abdf346cd74ccc0e8f58c5b`;
    

    let cityVal=cityName.value;
    
    if(cityVal==""){
        datahide.classList.add("data_hide");
        // alert("writ city name");
        city_name.innerText="Enter the city name";
        
        console.log('please add the proper city name');
        

        
    } 
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9647c4651abdf346cd74ccc0e8f58c5b`;



            const response = await fetch(url);
            // fetched data ko js object me convert krenge
            const data = await response.json();
            const arrData =[data];
    
            // const tempMood = arrData[0].weather[0].main;

            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            console.log(arrData[0].main.temp);
            temp_real_val.innerText=`${arrData[0].main.temp}`;
            const tempMood = arrData[0].weather[0].main;
            console.log("tempmood"+tempMood);
            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";

            
    
        }catch (error){
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper cityyyy name`;
            console.log('please add the proper city name');
           
        }
    }
    }


submitBtn.addEventListener("click",getInfo);