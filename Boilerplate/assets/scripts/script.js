$(document).ready(function() {
	
	let question1 = "Вам хотелось бы создавать игры?";
	let question2 = "Вам больше нравится визуал или прогать?";
	let question3 = "Тебе больше 13 лет?";
	let question4 = "Вы любите рисовать?";
	let question5 = "Если рисовать, то где?";
	let question6 = "вам нравится придумывать логические задачи?";
	let question7 = "Вам важно видеть визуальные своей работы?";
	let question8 = "Любите математику?";
	let question9 = "Готовы ли вы на всех занятиях заниматься маткматикой?";
	let question10 = "Что бы вы выбрали: Прогать сайт 5 часов или рисовать его концепт то же время?";
	let question11 = "Сайты или Мобильные приложения?";


// первый вариант развития событий     С#
	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.first-answer').click(function(){
					$('.question').text(question3);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){
								$('.question').text("C#");
								$('.answer-btn').addClass("-none");
									
				
	})
	})
	})
	// второй вариант развития событий  3D
	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.second-answer').click(function(){
					$('.question').text(question4);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question5);
									$('.first-answer').text("3Д");
									$('.second-answer').text("Планшет");
										$('.first-answer').click(function(){								
											$('.question').text(question3);
												$('.first-answer').text("ДА");
												$('.second-answer').text("Нет");
													$('.first-answer').click(function(){								
														$('.question').text("3Д");
															$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})
	})

		// третий вариант развития событий  геймдев
	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.second-answer').click(function(){
					$('.question').text(question4);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question5);
									$('.first-answer').text("3Д");
									$('.second-answer').text("Планшет");
										$('.first-answer').click(function(){								
											$('.question').text(question3);
												$('.first-answer').text("ДА");
												$('.second-answer').text("Нет");
													$('.second-answer').click(function(){								
														$('.question').text("GameDev");
															$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})
	})
	// четвертый вариант развития событий  концепт
	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.second-answer').click(function(){
					$('.question').text(question4);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question5);
									$('.first-answer').text("3Д");
									$('.second-answer').text("Планшет");
										$('.second-answer').click(function(){								
											$('.question').text("GameDev");
														$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})	
		// 5 вариант развития событий  lvl

	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.second-answer').click(function(){
					$('.question').text(question4);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.second-answer').click(function(){								
								$('.question').text(question6);
									$('.first-answer').text("ДА");
									$('.second-answer').text("НЕТ");
										$('.first-answer').click(function(){								
											$('.question').text(question3);
												$('.first-answer').text("ДА");
												$('.second-answer').text("Нет");
													$('.first-answer').click(function(){								
														$('.question').text("LVL");
															$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})
	})
		// 6 вариант развития событий Game dev

	$('.question').text(question1);
	$('.first-answer').click(function(){
		$('.question').text(question2);
			$('.first-answer').text("Програть!");
			$('.second-answer').text("Визуал!");
				$('.second-answer').click(function(){
					$('.question').text(question4);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.second-answer').click(function(){								
								$('.question').text(question6);
									$('.first-answer').text("ДА");
									$('.second-answer').text("НЕТ");
										$('.first-answer').click(function(){								
											$('.question').text(question3);
												$('.first-answer').text("ДА");
												$('.second-answer').text("Нет");
													$('.second-answer').click(function(){								
														$('.question').text("GameDev");
															$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})
	})
	// 7 вариант развития событий  ML
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.first-answer').click(function(){
					$('.question').text(question8);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question9);
									$('.first-answer').text("ДА");
									$('.second-answer').text("НЕТ");
										$('.first-answer').click(function(){								
											$('.question').text("ML");
											$('.answer-btn').addClass("-none");
													
	})													
	})			
	})
	})
	// 8 вариант развития событий  android приложения
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.first-answer').click(function(){
					$('.question').text(question8);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question9);
									$('.first-answer').text("ДА");
									$('.second-answer').text("НЕТ");
										$('.second-answer').click(function(){								
											$('.question').text(question11);
												$('.first-answer').text("Сайты");
												$('.second-answer').text("Мобилки");
													$('.second-answer').click(function(){
														$('.question').text("Мобильные приложения");
														$('.answer-btn').addClass("-none");
													
	})											
													
	})													
	})			
	})
	})
		// 9 вариант развития событий  сайты
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.first-answer').click(function(){
					$('.question').text(question8);
						$('.first-answer').text("ДА");
						$('.second-answer').text("НЕТ");
							$('.first-answer').click(function(){								
								$('.question').text(question9);
									$('.first-answer').text("ДА");
									$('.second-answer').text("НЕТ");
										$('.second-answer').click(function(){								
											$('.question').text(question11);
												$('.first-answer').text("Сайты");
												$('.second-answer').text("Мобилки");
													$('.first-answer').click(function(){
														$('.question').text("WEB-разработка");
														$('.answer-btn').addClass("-none");
													
	})											
													
	})													
	})			
	})
	})
	// 9 вариант развития событий  сайты
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.second-answer').click(function(){
					$('.question').text(question10);
						$('.first-answer').text("рисовать");
						$('.second-answer').text("програть");
							$('.second-answer').click(function(){								
								$('.question').text(question11);
									$('.first-answer').text("Cайты");
									$('.second-answer').text("Мобилки");
										$('.second-answer').click(function(){								
											$('.question').text("мобильные приложения");
											$('.answer-btn').addClass("-none");
													
	})											
													
	})													
	})			
	})
	// 10 вариант развития событий  сайты
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.second-answer').click(function(){
					$('.question').text(question10);
						$('.first-answer').text("рисовать");
						$('.second-answer').text("програть");
							$('.second-answer').click(function(){								
								$('.question').text(question11);
									$('.first-answer').text("Cайты");
									$('.second-answer').text("Мобилки");
										$('.first-answer').click(function(){								
											$('.question').text("WEB-разработка");
											$('.answer-btn').addClass("-none");
													
	})																							
	})													
	})			
	})
	// 11 вариант развития событий  рисовать дизайн
	$('.question').text(question1);
	$('.second-answer').click(function(){
		$('.question').text(question7);
			$('.first-answer').text("НЕТ");
			$('.second-answer').text("ДА");
				$('.second-answer').click(function(){
					$('.question').text(question10);
						$('.first-answer').text("рисовать");
						$('.second-answer').text("програть");
						$('.first-answer').click(function(){
							$('.question').text("Рисовать Design");
							$('.answer-btn').addClass("-none");
													
	})	
	})																					
	})													
});