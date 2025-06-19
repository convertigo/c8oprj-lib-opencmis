function get_full_path(file_path){
	if(file_path != ""){
		project_directory_path = context.getProjectDirectory().replace("\\", "/") + "/";
 		if(file_path.indexOf(".//") != -1){
  			file_path = project_directory_path + file_path.substring(3);
		}
 		else if(file_path.indexOf("./") != -1){
  			file_path = project_directory_path + "../" + file_path.substring(3);
		}
	}
	return file_path;
}

// Fonction utilitaire pour formater une date ISO 8601
function formatReadableDate(calendar) {
    if (calendar == null || calendar == "null") {
        return null; // Pas de date
    }
    var formatter = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
    formatter.setTimeZone(java.util.TimeZone.getTimeZone("UTC")); // Assure un format en UTC
    return formatter.format(calendar.getTime());
}

function convertValue(value) {
    if (value instanceof java.math.BigInteger) {
        return value.toString(); // Conversion en String
    } else if (value instanceof java.util.GregorianCalendar) {
        return formatReadableDate(value.getTime()); // Conversion Date → ISO 8601
    }
    return value; // Retourne la valeur originale
}

function formatValue(object) {
	try {
		if (!object || !object.type || object.value === undefined) {
            throw new Error("Invalid object!");
        }
		
	    switch (object.type.toLowerCase()) {
	        case "date":
	            var formatter = ("format" in object) 
	                ? new java.text.SimpleDateFormat(object.format) 
	                : new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
	            return formatter.parse(object.value);
	
	        case "long":
	        case "int":
	        case "integer":
	            return new java.lang.Integer(parseInt(object.value, 10)); // Conversion en entier
	            
	        case "biginteger":
	            return new java.math.BigInteger(java.lang.String(object.value)); // Conversion en entier
	            
            case "float":
			case "double":
			case "decimal":
			case "bigdecimal":
				return new java.math.BigDecimal(java.lang.String(object.value)); // Conversion en decimal
	            
	        case "boolean":
	            return new java.lang.Boolean(object.value === "true" || object.value === true); // Conversion en booléen
	            
            case "string":
	            return new java.lang.String(object.value); // Conversion en string
	
	        default:
	            return object.value;
	    }
    } catch (e) {
		// Handle exceptions
		error = e.message;
		log.error("Error: " + error);
		if (e.cause) {
			log.error("Cause: " + e.cause.message);
		}
	}
}

function getProperties(doc){
	// Get document properties
	if (doc.getProperties() == null) {
	    throw new Error("Properties not found.");
	}
	
	var res_props = [];
	doc.getProperties().forEach(function(prop) {
	    var value = convertValue(prop.getValue());
	    res_props.push({"id": prop.getId(), "name": prop.getDisplayName(), "value": value});
	});
	
	return res_props;
}