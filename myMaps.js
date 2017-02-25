function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AmGfXoPF5L4OcyP3y1T7R9POld5vCh6OkxuB9eRsNaqVvd6J6Z3hHZUWyh79THjC'
    }); 
    map_manager.map=map;
    query_pokemon_data();
    window.setInterval(refresh_pokemon_layer, 1000);
}
