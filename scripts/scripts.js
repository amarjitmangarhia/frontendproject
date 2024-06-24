// this code will hide and show the paragraphs on about us page

$(document).ready(function() {
    // hide all the p elements initially
    $("ul.content p").hide();
  
    // attach a click event listener to all the list items
    $("ul.content li").click(function() {
      // hide all the other p elements
      $("ul.content p").not($(this).next("p")).hide();
      
      // toggle the visibility of the corresponding p element
    //   $(this).next("p").toggle();
      $(this).next("p").slideToggle(400, "swing");
    });
  });
  

//   for form

$(document).ready(function() {
    $('.contact-form').submit(function(e) {
      e.preventDefault(); // prevent form submission
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var email = $('#email').val();
      var textarea = $('#textarea').val();
      valid = true

  
      // validate name
      if (!fname) {
        $('#fname').addClass('error');
        valid = false;
      } else {
        $('#fname').removeClass('error');
      }

      if (!lname) {
        $('#lname').addClass('error');
        valid = false;
      } else {
        $('#lname').removeClass('error');
      }

      if (!email) {
        $('#email').addClass('error');
        valid = false;
      } else {
        $('#email').removeClass('error');
      }

     


    var male = $('#male').prop('checked');
    var female = $('#female').prop('checked');
    var robot = $('#robot').prop('checked');


    if(male || female) {
        valid = true;
    } else {
        alert("Please select gender")
        valid = false
    }

    if(robot) {
        valid = true
    } else {
        valid= false
        alert("Check robot field")
    }

    if(!textarea) {
        $('#textarea').addClass('error');
        valid = false;
    } else {
        $('#textarea').removeClass('error');
      }

      // submit form if valid
    if (valid) {
      this.submit();
    }
  });
});
  
    
    

  // 


  $(document).ready(function() {
    v = $('.team_content .left')
    v.hover(function() {
      v.css('background-color', '#fccc8d');
      v.css('cursor', 'pointer')
      v.css('border-bottom-left-radius', '10px')
      v.css('border-top-right-radius', '10px')

    }, function() {
      v.css('background-color', '#F9EAD7');
      v.css('font-size', '5px')
    })
  });

 
