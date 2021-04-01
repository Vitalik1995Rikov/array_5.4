let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл"); // добавил

let a = Math.floor(styles.length/2); // для нахождения середины

styles[a] = "Классика"; // добавил в середину

alert(styles.shift()); // удалил первый и показал его

styles.unshift('Рэп', 'Рэгги'); // добавил в начало 2 элемента