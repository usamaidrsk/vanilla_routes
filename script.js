document.addEventListener('DOMContentLoaded',function(){
// console.log(document.getElementsByClassName('links'))
document.getElementById('lists').addEventListener('click',function(e){
     e.preventDefault();
        if(e.target.id == 'hom'){
            document.getElementById('home').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('community').style.display = 'bnone';
        }
        else if(e.target.id == 'abot'){
            document.getElementById('about').style.display = 'block';
            document.getElementById('home').style.display = 'none';
            document.getElementById('community').style.display = 'none';
        }
        else if(e.target.id == 'cmty') {
            document.getElementById('community').style.display = 'block';
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'none';
        }
    })
})
