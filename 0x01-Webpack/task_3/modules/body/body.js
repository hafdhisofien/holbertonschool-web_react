import $ from 'jquery';
import _ from 'lodash';
import "./body.css";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');


function updateCounter() {
    let count = $('#count').html() || 0;
    $('button').on('click',
    _.debounce(updateCounter, 500), () => {
      count++;
      $('#count').html(`${count} clicks on the button`);
    });
  };

updateCounter();
