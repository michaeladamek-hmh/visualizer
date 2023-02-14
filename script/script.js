let grade = document.getElementById('grade');
let gradeValue = Number(grade.value)

let root = document.documentElement;
grade.onchange = function () {
  console.log(grade.value);
  root.style.setProperty('--active-para-size', 'var(--type-size-lv' + grade.value + ')');
  root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + grade.value + ')');
  root.style.setProperty('--active-caption-size', 'var(--type-size-lv' + (grade.value - 2) + ')');
  root.style.setProperty('--active-para-lheight', 'var(--para-lheight-lv' + grade.value + ')');
  root.style.setProperty('--active-base-lheight', 'var(--para-lheight-lv' + grade.value + ')');
};

document.getElementById('title-size').onchange = function () {
  console.log(grade.value, this.value);
  if (grade.value == 11 || grade.value == 5) {
    console.log('kindergarden');
    switch (this.value) {
      case 'lg':
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + (Number(grade.value) + 2) + ')');
        console.log(Number(grade.value) + 1);
        break;
      case 'md':
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + grade.value + ')');
        console.log(grade.value);
        break; 
      case 'sm':  
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + (grade.value - 1) + ')');
        console.log(grade.value - 1);
        break;
      default:  
      break;  
    }
    return;
    } else {
    switch (this.value) {
      case 'lg':
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + (Number(grade.value) + 1) + ')');
        console.log(Number(grade.value) + 1);
        break;
      case 'md':
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + grade.value + ')');
        console.log(grade.value);
        break; 
      case 'sm':  
        root.style.setProperty('--active-heading-size', 'var(--type-size-lv' + (grade.value - 1) + ')');
        console.log(grade.value - 1);
        break;
      default:  
      break;  
    }
  }
}

document.getElementById('anatomy-size').onchange = function () {
  console.log(this.value);
  switch (this.value) {
  case 'lg':
    root.style.setProperty('--active-para-size', 'var(--type-size-lv' + (Number(grade.value) + 1) + ')');
    console.log(Number(grade.value) + 1);
    break;
  case 'md':
    root.style.setProperty('--active-para-size', 'var(--type-size-lv' + grade.value + ')');
    console.log(grade.value);
    break; 
  case 'sm':  
    root.style.setProperty('--active-para-size', 'var(--type-size-lv' + (grade.value - 1) + ')');
    console.log(grade.value - 1);
    break;
  default:  
    break;  
  }
}

document.getElementById('border-size').onchange = function () {
  console.log(document.getElementById('border-size').value);
  root.style.setProperty('--active-border-size', document.getElementById('border-size').value + 'px');
}

document.getElementById('border-radius').onchange = function () {
  console.log(document.getElementById('border-radius').value);
  root.style.setProperty('--active-border-radius', document.getElementById('border-radius').value + 'px');
}

document.getElementById('col-span').onchange = function () {
  console.log("here!", document.getElementById('col-span').value);
  root.style.setProperty('--active-col-span', 'span ' + document.getElementById('col-span').value);
}

document.getElementById('lr-padding').onchange = function () {
  console.log(this.value)
  root.style.setProperty('--active-lr-padding', 'var(--active-' + this.value + '-lheight)');
}

document.getElementById('tb-padding').onchange = function () {
  console.log(this.value)
  root.style.setProperty('--active-tb-padding', 'var(--active-' + this.value + '-lheight)');
}

document.getElementById('btn-lr-padding').onchange = function () {
  console.log(this.value)
  root.style.setProperty('--active-btn-lr-padding', 'var(--active-' + this.value + '-lheight)');
}

document.getElementById('btn-tb-padding').onchange = function () {
  console.log(this.value)
  root.style.setProperty('--active-btn-tb-padding', 'var(--active-' + this.value + '-lheight)');
}

document.getElementById('btn-border-size').onchange = function () {
  console.log(document.getElementById('btn-border-size').value);
  root.style.setProperty('--active-btn-border-size', document.getElementById('btn-border-size').value + 'px');
}

document.getElementById('btn-border-radius').onchange = function () {
  console.log(document.getElementById('btn-border-radius').value);
  root.style.setProperty('--active-btn-border-radius', document.getElementById('btn-border-radius').value + 'px');
}

document.querySelectorAll('input.anatomy').forEach(anatomyBox => {
  anatomyBox.addEventListener('click', function(event) {
    let parent = document.querySelector('div.' + event.target.name);
    console.log(parent);
    if (event.target.checked === true) {
      parent.classList.remove('hidden');
    } else {
      parent.classList.add('hidden');
    }

    let feedbackBar = document.querySelector('div.feedback-bar');

    if (feedbackBar.classList.contains('hidden')) {
      feedbackBar.previousSibling.previousSibling.classList.add('bottom-border-radius')
    } else {
      feedbackBar.previousSibling.previousSibling.classList.remove('bottom-border-radius')
    }
  })
})

document.querySelectorAll('input.feedback-canned-msg').forEach(messageBox => {
  messageBox.addEventListener('click', function(event) {
    console.log(event.target)
    let message = document.querySelector('.feedback-bar > p');
    message.className = ''
    if (event.target.checked === true) {
      message.classList.add(event.target.id)
    }
  })
})


document.querySelectorAll('input.feedback-buttons').forEach(buttonBox => {
  buttonBox.addEventListener('click', function(event) {
    console.log('HERE', event.target.id)
    let button = document.querySelector('button.' + event.target.id);
    console.log(button);
    if (event.target.checked === true) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  })
})

document.querySelectorAll('input.feedback-message').forEach(feedbackBox => {
  feedbackBox.addEventListener('click', function(event) {
    console.log('HERE', event.target)
    let parent = document.querySelector('div.' + event.target.name);
    console.log(parent);
    if (event.target.checked === true) {
      parent.classList.remove('hidden');
    } else {
      parent.classList.add('hidden');
    }
  })
})

document.getElementById('icon-size').onchange = function() {
  console.log(this.value, document.querySelectorAll('.controls-button-wrapper button'));
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.backgroundSize = this.value;
  })
}

document.getElementById('btn-width').onchange = function() {
  console.log(this.value);
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.width = this.value;
  })
}

document.getElementById('btn-height').onchange = function() {
  console.log(this.value);
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.height = this.value;
  })
}

document.getElementById('btn-radius').onchange = function() {
  console.log(this.value);
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.borderRadius = this.value + 'px';
  })
}

document.getElementById('btn-radius').onchange = function() {
  console.log(this.value);
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.borderRadius = this.value + 'px';
  })
}

document.getElementById('btn-space-between').onchange = function() {
  console.log(this.value);
  document.querySelectorAll('.controls-button-wrapper button').forEach(button => {
    button.style.marginRight = this.value + 'px';
  })
}

document.getElementById('btn-space-below').onchange = function() {
  console.log(this.value);
  document.querySelector('.container').style.marginTop = this.value + 'px';
}


