(function(window, undefined) {
  var dictionary = {
    "194af169-8878-4293-9277-3f819e6343c0": "Carritosiguiente-1dirección",
    "3ebe5f68-e3f4-4ba7-bc81-4de372b0a1c1": "Identificarse",
    "b0184db2-0a51-4055-b8bb-ec1bfa6e6805": "IndividualProduct",
    "394c1296-0988-489a-9ba1-e2f3537bb191": "Carritosiguiente-2pagoR",
    "060e440d-c30d-4084-9f89-d602a98f0c6a": "Carrito",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Catalog",
    "e3031503-c6e0-4b91-9799-e40499663174": "Carritosiguiente-3finalización",
    "9fbd3e49-c8ae-496f-9fe7-34d106be2805": "Carritosiguiente-2pago",
    "efd76819-00c2-4e60-bbfc-e76bef135228": "Registrarse",
    "9c77eff9-0104-4ede-82f5-72a372839040": "Carritosiguiente-1direcciónRellena",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);