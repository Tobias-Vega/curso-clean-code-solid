(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Movie {
      cast: string[];
      description: string;
      rating: number;
      title: string;
    }
    
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullNme(fullname: string) {
      console.log({fullname});
      return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullNme(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();