$(document).ready(function()
{

	const actualMovies = ["images/filme001.jpg","images/filme002.jpg","images/filme003.jpg","images/filme004.jpg"];
	const briefMovies = ["images/filme005.jpg","images/filme006.jpg","images/filme007.jpg","images/filme008.jpg"];

	// EM CARTAZ
	let posterMoviesSection = document.getElementById("em-cartaz");
	let posterH2 = document.createElement("h2");
	let listPoster = document.createElement("ul");
	posterH2.innerHTML = "Em cartaz";
	posterMoviesSection.appendChild(posterH2);
	posterMoviesSection.appendChild(listPoster);
	

	// EM BREVE
	let briefMoviesSection = document.getElementById("em-breve");
	let briefH2 = document.createElement("h2");
	let listBrief = document.createElement("ul");
	briefH2.innerHTML = "Em breve";
	briefMoviesSection.appendChild(briefH2);
	briefMoviesSection.appendChild(listBrief);


	function generateMoviesList(listNamesMovies, listAppend)
	{
		listNamesMovies.forEach((movie)=>
		{
			let posterMovie = document.createElement("li");
			posterMovie.style.backgroundImage = "url("+ movie + ")";
			listAppend.appendChild(posterMovie);
		})
	}

	generateMoviesList(actualMovies, listPoster);
	generateMoviesList(briefMovies, listBrief);

});