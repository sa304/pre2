    function score()
    {
      var q1 = document.forms.form.q1.value;
      var q2 = document.forms.form.q2.value;
      var q3 = document.forms.form.q3.value;
      var q4 = document.forms.form.q4.value;
      var q5 = document.forms.form.q5.value;
      var q6 = document.forms.form.q6.value;
      var q7 = document.forms.form.q7.value;
      var q8 = document.forms.form.q8.value;
      var q9 = document.forms.form.q9.value;
      var q10 = document.forms.form.q10.value;
      var q11 = document.forms.form.q11.value;
      var q12 = document.forms.form.q12.value;
      var q13 = document.forms.form.q13.value;
      var q14 = document.forms.form.q14.value;
      var q15 = document.forms.form.q15.value;
      var q16 = document.forms.form.q16.value;
      var q17 = document.forms.form.q17.value;
      var q18 = document.forms.form.q18.value;
      var q19 = document.forms.form.q19.value;
      var q20 = document.forms.form.q20.value;
      var q21 = document.forms.form.q21.value;

      var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21];

      var answers = ["a","b","c","c","b","a","c","b","b","a","a","c","c","b","a","b","b","c","a","a","b"];

      var points = 0;
      var total = 21;

      for (var i = 0; i < total; i++)
      {
        if (questions[i] === answers[i])
        {
          points = points + 1;  
        }
      
    }

    var q = document.getElementById("rada");
  
      q.style.fontSize = "20px";
      q.style.textAlign = "center";
      q.style.color = "yellow";
      q.innerHTML = "Obtuviste " + points + " puntos de " + total;
    
      return false;  
    }
