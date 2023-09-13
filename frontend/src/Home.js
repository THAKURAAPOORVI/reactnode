import React, { useState } from 'react'
// import { BsEmojiSmile } from "react-icons/fa";
const Home = () => {
  const [email,setEmail]=useState("")
  const clickHandler=async()=>{
     console.log(email)
     let result=await fetch("http://localhost:4000/emails",{
      method:"post",
      body:JSON.stringify({email}),
      headers:{
        'Content-Type':'application/json'
      }
     })

     result=await result.json()
     console.log(result)
     alert("your email is verified")
  }
  return (
  <>
  
  <div className='home'>
<div className='content'>
    <h1 >Welcome To Veggies Store</h1>
{/* <img src='https://wallpaperaccess.com/full/1306607.jpg'>
</img> */}

<p>The quality of food really affects the work of the body: a poor diet in terms of useful substances increases the risk of cardiovascular diseases, diabetes, osteoporosis and other diseases.</p>

</div>
  </div>
  
  <div class="card-group">
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU38qos0jTIPakd4VNanEKVeI0E3gU3XuLbg&usqp=CAU" class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Fresh Vegetables</h5>
      <p class="card-text">
                                Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion.
                            .</p>
                            <a class="btn btn-lg btn-black display-7">
                        SHOP NOW
                        </a>

    </div>
    <div class="card-footer">
      
    </div>
  </div>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xPqiqOoeHZv0QiojhhKcxIBePi63IFpDlA&usqp=CAU" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Interesting Food</h5>
      <p class="card-text">
                               Fresh tomatoes are ideal for replenishing the loss of minerals. These vegetables contain a lot of acids that our body needs for full-fledged work.
                            .</p>
                            <a class="btn btn-lg btn-black display-7">
                        SHOP NOW
                        </a>

    </div>
    <div class="card-footer">
      
    </div>
  </div>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoIoHewHRbLZzm_e-XG3JuNDiTL49S3pJNpawwJQTyfDjutH4qTeSNq2A6DYQKSKe30I&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Best Prices</h5>
      <p class="card-text">
                                In the content of vitamin C, sweet peppers are superior to lemons and even black currants! The greatest amount of vitamin is contained around the stalk, that is, in the part of the product that is usually cut during cleaning.
                            </p>
                            <a class="btn btn-lg btn-black display-7">
                        SHOP NOW
                        </a>
    </div>
    <div class="card-footer">

    </div>
  </div>
</div>
  <div className='container'>
    <div className='row'>
        {/* <div className=' imi col-lg-6'>
            <img src="https://mobirise.com/extensions/organicamp/assets/images/12.jpg" style={{    width:" "}}></img>
        </div> */}
        <div className='pic col-lg-6'>
          <img src='https://mobirise.com/extensions/organicamp/assets/images/12.jpg' style={{width:"500px",height:"554px"}}></img>
        </div>
        <div className=' col-lg-6'>
            <h5>Fresh Food</h5>
            <h3 class="mbr-section-title mbr-fonts-style mbr-bold mbr-black display-2">
                        Our Vegan Store!
                    </h3><br></br>
                    <p class="mbr-fonts-style align-left general-text mbr-text main-text display-4">
                        Radish contains a lot of fiber, pectin and mineral salts.
                    </p>
                     <br></br>
                    <h4>Healthy Food    </h4>
                    <p>Use for cooking several types of vegetable oil.</p><br></br>
                    <h4>
High Quality</h4>
<p>This is the best source of essential fatty acids for the body.</p><br></br>
<h4>Best Price</h4>
<p>It is very good, if in the kitchen there will always be several bottles with different oils.</p>
                 <br></br> 
                 <h4>Sale</h4>  
                 <p>Remember that unrefined oils are not suitable for heat treatment.</p>
        </div>
    </div>
  </div><br></br>
  <div className='container'>
    <div className='row'>
      <div className='con col-12'>
        <h1>What do you know about healthy food?</h1>
        <p>Use natural and fresh products for cooking. Any semi-finished product or a long-term storage product with preservatives, flavor enhancers and dyes increases the load on the body, prevents the elimination of toxins, slows the metabolism.</p>
      </div>
    </div>
  </div>
  <div className='container-fluid' style={{backgroundColor:'black',color:'white',padding:'10%'}}>
    <div className='row'>
      <div className=' black col-lg-12 col-sm-12 col-md-12' style={{textAlign:'center'}}>
      
      <h5>Meet Our Team</h5>
      
     <h1><b>Do You Know About Teams?</b></h1>
      <h4>According to experts, any habit can be formed in 21 days. The same statement applies to healthy eating.</h4>
      
      
      </div>

    </div>

    {/* second row */}
    <div className='row mt-5 ' id="imagescenter">
      {/* first */}
      <div className=' black col-lg-3 col-sm-12 col-md-6'>
      <img src="https://mobirise.com/extensions/organicamp/assets/images/face5.jpg" style={{height:"200px",width:'200px',borderRadius:'50%'}}></img>
      </div>

      {/* second */}
      <div className=' black col-lg-3 col-sm-12 col-md-6'>
      
      <img src="https://mobirise.com/extensions/organicamp/assets/images/face6.jpg" style={{height:"200px",width:'200px',borderRadius:'50%'}}></img>
      </div>

      {/* third */}
      <div className=' black col-lg-3 col-sm-12 col-md-6'>
      
      <img src="https://mobirise.com/extensions/organicamp/assets/images/face7.jpg" style={{height:"200px",width:'200px',borderRadius:'50%'}}></img>
      
      </div>

      {/* forth */}
      <div className=' black col-lg-3 col-sm-12 col-md-6'>
      
      <img src="https://mobirise.com/extensions/organicamp/assets/images/face8.jpg" style={{height:"200px",width:'200px',borderRadius:'50%'}}></img>
      
      </div>

    </div>

  </div>

  {/* third last container */}
  <div className='container-fluid bg1' id="bg1" >
    <div className='row' >
    
  
<div className='col-lg-12 col-sm-12 col-md-12'>
<h1>Order food online<br></br>
for you or for friends!</h1>

<button id="fb1" className='m-2'>FOR ME</button>
<button id="fb2" className='m-2'>FOR FRIENDS</button>

</div>
    </div>
  </div>

  {/* second last */}
  <div className='container-fluid' style={{    backgroundColor:"#f7eee2",backgroundSize:"cover",padding:'6%',paddingLeft:'15%'}}> 
  <div className='row'>
  <div className='col-sm-12 col-md-4 col-lg-4'>
    <h5>Follow to Us</h5>
    <h1>Subscribe</h1>
    </div>
    <div className='col-sm-12 col-md-4 col-lg-8'>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="email" placeholder='your email' style={{padding:"10px 90px ",border:'none',backgroundColor:"white",borderRadius:"4px"}} className="pe-4" value={email} onChange={(e)=>setEmail(e.target.value)}  ></input>
      <button className='sub' onClick={clickHandler}>Subscribe</button>
      </form>
   
    
    </div>
    {/* <div className='col-sm-12 col-md-4 col-lg-4'>
    
   
    </div> */}
    </div>
  </div>
  {/* <last box>  */}
   <div className='container-fluid' id="last"style={{backgroundColor:"black",color:"white",padding:"5%",}}>
    <div className='row mt-2 footer'>
      <div className='col-lg-3 col-sm-12 col-md-6 nav-item1 '  style={{paddingLeft:"15px",paddingRight:"15px",lineHeight:"10px",textAlign:"center"}}>
        <h3 style={{marginBottom:"40px"}}>Contact Our Shop</h3>
        <p style={{marginBottom:"20px",fontSize:"14px",marginTop:"10px",lineHeight:"2"}}>Grocery Store Simple Website Template. These habits are not difficult to inculcate at all, you just need to set a clear goal before you and not a step away from it.
        </p>
        
      <p style={{padding:"15px%"}}>
 ContactNo:78377-88822,
Mohali </p><br></br>
 
      </div>
      <div className='col-lg-3 col-sm-12 col-md-6 nav-item1 footer' style={{paddingLeft:"15px",paddingRight:"15px",lineHeight:"10px",textAlign:"center"}}>
        <h3 >Opening Hours</h3>
      <p style={{marginTop:"35px",lineHeight:"2"}}>MON – FRI</p>
      <p>08:00 am – 17:00 pm</p>
             <div >
              <p>SAT – SUN</p>
              <p>06:00 am – 11:30 pm</p></div>         
      </div>
      <br></br>
      <div className='col-lg-3 col-sm-12 col-md-6  footer nav-item1' style={{paddingLeft:"15px",paddingRight:"15px",textAlign:"center",lineHeight:"10px",}}>
        <h3/*  style={{}} */>Userful Link</h3>
        <ul style={{margin:"20px",listStyle:"none" ,lineHeight:"2"}}>
          <li>About Us</li>
             <li>Portfolio</li>
          <li>Terms Of Service</li>
          <li>Contact Us

</li>
        </ul>
      </div>
      <div className='col-lg-3 col-sm-12 col-md-6  footer nav-item1' style={{paddingLeft:"15px",paddingRight:"15px",textAlign:"center"}}>
        <h3>Get Direction</h3>
        <br></br>
 
<div className='map'>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6860.927199015455!2d76.72145321983643!3d30.705364874756874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef5081179ba3%3A0x2f5b9f6b13b21371!2sAnshu%20Home%20Tuition!5e0!3m2!1sen!2sin!4v1680171833912!5m2!1sen!2sin" width="300" height="200" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
      </div>
    </div>
  </div>
  // comiit
  </>
  )
}

export default Home