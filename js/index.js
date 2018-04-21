$('p').click(function(){
    $(this).hide(2000);
})

$('.red').on('click', function(){
    $(this).fadeOut();
})

$('li').on('click', function(){
    console.log('this is an li: ', $(this).html())
})

// $('button').click(function(){
//     $('input').toggle();
// })

// $('input').keyup(function(){
//     let name= $(this).val();
//     console.log(name)
//     var fullName = "Hello " + name;
//     $('h1').text(fullName);
// })

$('#sign-up-form').submit(function(e){
    e.preventDefault();
    console.log('hey: ', $('input'));

    let username = $("input[name = 'username']").val();
    // console.log('username b: ', username);
    let password = $('input[name="password"]').val();
    // console.log('password is: ', password)
    if (username === "ironhack" && password ==='123'){
        console.log('You\'re good to go!')
    } else{
        console.log('Sorry! Try again')
    }
})