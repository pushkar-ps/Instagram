const storySection = document.querySelector(".storySection");
const fullStory = document.querySelector("#fullStory");
const mainPage = document.querySelector(".mainPage");
const mainStory = document.querySelector(".mainStory");
const postImage = document.querySelector(".postImg");
const loveIcon = document.querySelector("#loveIcon");
const heartIcon = document.querySelector("#heartIcon");

var arr = [
    {
        img: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
    {
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", storyImg: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww", storyImg: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", storyImg: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1596245195341-b33a7f275fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1550935114-99de2f488f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img: "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D", storyImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG1vZGVsfGVufDB8fDB8fHww"
    },
]

var story = ""
arr.forEach(function (elem, idx) {
    story += `<div class="story">
  <img id="${idx}" src="${elem.img}"
      alt="">
      </div>`
});
// <p>${elem.userName}</p>
storySection.innerHTML = story;


storySection.addEventListener("click", function (dets) {
    fullStory.style.display = "block"
    mainPage.style.display = "none"
    mainStory.innerHTML = `<img src="${arr[dets.target.id].storyImg}" alt="">`
    document.querySelector(".story").style.background = "#DEDEDE"
    console.log(arr[dets.target.id].storyImg);
    setTimeout(() => {
        fullStory.style.display = "none"
        mainPage.style.display = "flex"
    }, 4000);
});

document.querySelector(".closeBtn").addEventListener("click", function () {
    fullStory.style.display = "none"
    mainPage.style.display = "flex"
})
// ==========================================================================

var ps = [
    {
        userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", realName: "Alamea", userName: "t_bird.girl"
    },
    {
        userProfile: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D", realName: "Carmelia", userName: "carmelia.twiggy"
    },
    {
        userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D", realName: "Georgiana", userName: "georgiana_casey"
    },
    {
        userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww", realName: "Naama", userName: "naamaspencer"
    },
    {
        userProfile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww", realName: "love", userName: "loveblossom"
    },
];


var otherUserId = ""
ps.forEach(function (elem, idx) {
    otherUserId += ` <div class="otherUserId">
  <div class="othetUserDetail">
      <img src="${elem.userProfile}"
          alt="">
      <div class="userName">
          <p id="userIgId">${elem.userName}</p>
          <p id="realName">${elem.realName}</p>
      </div>
  </div>
  <button id="follow" class="isFolloow">Follow</button>
</div>`

});

document.querySelector(".otherSuggestedUser").innerHTML = otherUserId;


const isFolloow = document.querySelector(".isFolloow");
let isFollow = 0;

console.log(isFolloow);

isFolloow.addEventListener("click", function () {
    if (isFollow == 0) {
        isFolloow.innerHTML = "Unfollow";
        isFolloow.style.color = "black";
        isFollow = 1;
    } else {
        isFolloow.innerHTML = "Follow";
        isFolloow.style.color = "#0095F6";
        isFollow = 0;
    }
})

// post  ==============================================================
var postPic = [
    { userDp: "/assets/images.jpeg", userInstaId: "pushkar_ps_", postImg: "https://media.fastdl.app/get?__sig=97aLIhtUqRjFmkX_ZdoQLg&__expires=1719736850&uri=https%3A%2F%2Fscontent-fra3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F168016101_464259975021692_3918291070064850083_n.jpg%3Fstp%3Ddst-jpg_e35%26_nc_ht%3Dscontent-fra3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3DBoSriY1f_bcQ7kNvgF3Nuvx%26edm%3DAP_V10EBAAAA%26ccb%3D7-5%26oh%3D00_AYDbyHdMxIj4QlitjG7y1YRqZfJjzLxjHLBAC6vswAEy5Q%26oe%3D6686FAD7%26_nc_sid%3D2999b8", postLike: "102,584,484", postTital: "1st Post", comment: "458,055,868" },

    { userDp: "https://i.pinimg.com/474x/1b/f6/1f/1bf61fc28229abd79ec1f7e1b965d22a.jpg", userInstaId: "mahi7781", postImg: "https://media.fastdl.app/get?__sig=GDbSfhCFvTdy0b4UdgRIcg&__expires=1719736958&uri=https%3A%2F%2Finstagram.faqp3-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F449642893_18457375894002792_2046249882210758758_n.jpg%3Fstp%3Ddst-jpg_e35_s1080x1080_sh0.08%26_nc_ht%3Dinstagram.faqp3-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DXA233BhlISYQ7kNvgFvl0bq%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYDgS9qGku1J_Jra74UkveXKXBdPmG8Sx5fYMdYjoj8ueg%26oe%3D66863AAE%26_nc_sid%3D2999b8", postLike: "102,584,484", postTital: "WORLD CUP CHAMPIONS 2024.", comment: "8,055,868" },


    { userDp: "https://media.fastdl.app/get?__sig=VDFlS5yWpbUey8aQoGpCwQ&__expires=1719737516&uri=https%3A%2F%2Finstagram.fotp7-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F449416854_18444808480006294_1134560145327980560_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dinstagram.fotp7-2.fna.fbcdn.net%26_nc_cat%3D110%26_nc_ohc%3DHz2b_HTG1QAQ7kNvgExdocu%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYCZK8R8jmNNjNupQHsNSRBrU-dBU8DR7ptd1ZMDRhL8bg%26oe%3D6686E03D%26_nc_sid%3D2999b8", userInstaId: "shahidkapoor", postImg: "https://i.pinimg.com/736x/9b/26/76/9b26766b755f7aa3677c2e203dc0b5ca.jpg", postLike: "584,484", postTital: "", comment: "868" },


    { userDp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "caitlin.bridgett", postImg: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "2,584,484", postTital: "", comment: "55,868" },

    { userDp: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "EZ_aliza", postImg: "https://i.pinimg.com/474x/d6/74/a5/d674a52e514fe09df79d04896cf2b91c.jpg", postLike: "88,286,277", postTital: "Whatever is good for your soul, do that.", comment: "335,270" },

    { userDp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", userInstaId: "the_angelique", postImg: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", postLike: "4,549,658", postTital: "Angelique", comment: "756,300" },

    { userDp: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", userInstaId: "phoenix_twiggy", postImg: "https://images.unsplash.com/photo-1588249175361-d64335d67e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "87,891,956", postTital: "The way you speak to yourself matters the most.", comment: "955,313" },

    { userDp: "https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "hayley_cotton", postImg: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww", postLike: "17,154,641", postTital: "Get out there and live a little", comment: "560,599" },

    { userDp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "anabel.speedy", postImg: "https://images.unsplash.com/photo-1562894369-193bedce28e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsfGVufDB8fDB8fHww", postLike: "71,255,882", postTital: "Better an Oops, than a what if", comment: "384,935" },

    { userDp: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "the_angelique", postImg: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", postLike: "94,819,901", postTital: "Angelique", comment: "694,208" },

    { userDp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "chancekaelyn", postImg: "https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "56,859,136", postTital: "Another fine day ruined by responsibilities.", comment: "685,372" },

    { userDp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "alexiatimber", postImg: "https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "2,15,11,080", postTital: "I put the ‘Pro’ in procrastinate.", comment: "564,492" },

    { userDp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "genevieve.angel", postImg: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "57,648,060", postTital: "If I was funny, I would have a good Instagram caption.", comment: "891,889" },

    { userDp: "https://images.unsplash.com/photo-1534679949574-9c91880cf453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "esther_tara", postImg: "https://images.unsplash.com/photo-1515161079661-197513d8b51e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "46,386,835", postTital: "I need a six month holiday, twice a year.", comment: "407,250" },

    { userDp: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", userInstaId: "esperanza_sydney", postImg: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", postLike: "95,088,687", postTital: "Vodka may not be the answer but it’s worth a shot", comment: "80,592" },
];

var post = ""
postPic.forEach(function (elem, idx) {
    post += ` <div class="post">
    <div class="postUser">
        <div class="userDetail">
            <img src="${elem.userDp}"
                alt="">
            <div class="userId">
                <p>${elem.userInstaId}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" alt="">
                <p>&#x2022 13 h</p>
            </div>
        </div>
        <div class="moreOption">
            <i class="fa-solid fa-ellipsis"></i>
        </div>

    </div>
    <div class="postImg">
        <img src="${elem.postImg}"
            alt="">
         <i class="fa-solid fa-heart" id="bigLikeIcon"></i>
    </div>

    <div class="postBtn">
        <div class="likeBtnSection">
             <div class="likeBtn">
                <i class="fa-regular fa-heart"></i>
             </div>   
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
        <div class="saveBtn">
            <i class="fa-regular fa-bookmark"></i>
        </div>
    </div>

    <div class="postDetail">
        <div class="numberOfLikes">
            <p>${elem.postLike} likes</p>
        </div>
        <p>${elem.userInstaId}</p>
        <img src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" alt="">
        <p>${elem.postTital}</p>
    </div>
    <div class="comment">
        <p>View all ${elem.comment}comments</p>
        <div class="addComment">
            <p>Add a comment...</p>
            <i class="fa-regular fa-face-smile"></i>
        </div>
    </div>
    <hr>
</div>`
});

document.querySelector(".postSection").innerHTML = post;

const likeBtn = document.querySelector(".likeBtn");
const bigLikeIcon = document.querySelector("#bigLikeIcon");
const postImg = document.querySelector(".postImg");

console.log(postImg);
let isLike = 1;

likeBtn.addEventListener("click", function () {
    if (isLike == 1) {
        likeBtn.innerHTML = `<i class="fa-solid fa-heart" id="likeHeartBtn"></i>`
        bigLikeIcon.style.transform = 'translate(-50%, -50%)scale(1)'
        setTimeout(() => {
            bigLikeIcon.style.opacity = 0
        }, 700);
        setTimeout(() => {
            bigLikeIcon.style.transform = 'translate(-50%, -50%)scale(0)'
        }, 1000);
        isLike = 0;
    } else {
        likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`
        isLike = 1;
    }
})

