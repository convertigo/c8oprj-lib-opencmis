


# lib_OpenCMIS

# CMIS connector to Alfresco

This is the CMIS connector for Convertigo enabling to read and put file in CMIS repositories such as Alfresco. The Connector relies on the Apache OpenCMIS library.



For more technical informations : [documentation](./project.md)

- [Installation](#installation)
- [Sequences](#sequences)
    - [CheckConnect](#checkconnect)
    - [Connect](#connect)
    - [DeleteObject](#deleteobject)
    - [GetFile](#getfile)
    - [GetFolders](#getfolders)
    - [PutFiles](#putfiles)
    - [UpdateProperties](#updateproperties)


## Installation

1. In your Convertigo Studio click on ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/icons/studio/project_import.gif?raw=true "Import a project in treeview") to import a project in the treeview
2. In the import wizard

   ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/tomcat/webapps/convertigo/templates/ftl/project_import_wzd.png?raw=true "Import Project")
   
   paste the text below into the `Project remote URL` field:
   <table>
     <tr><td>Usage</td><td>Click the copy button at the end of the line</td></tr>
     <tr><td>To contribute</td><td>

     ```
     lib_OpenCMIS=https://github.com/convertigo/c8oprj-lib-opencmis.git:branch=master
     ```
     </td></tr>
     <tr><td>To simply use</td><td>

     ```
     lib_OpenCMIS=https://github.com/convertigo/c8oprj-lib-opencmis/archive/master.zip
     ```
     </td></tr>
    </table>
3. Click the `Finish` button. This will automatically import the __lib_OpenCMIS__ project


## Sequences

### CheckConnect

### Check if the CMIS session is still alive.

Will return isConnected true/false and the session name if available.

#### Output

```
{
  "result": {
    "isConnected": true,
    "session": "Session 9b6cc4b7-5b83-43f0-a2ad-d5d1939a378b",
    "name": "",
    "id": "-default-",
    "description": "",
    "version": "1.1",
    "vendor": "Alfresco",
    "product": "Alfresco Community",
    "root": "4d92ecbb-c391-452a-92ec-bbc391852a98"
  }
}
```

### Connect

### Establish a Session between Convertigo and the Target CMIS (Alfresco)

Has to be called before any other Sequence. The session will be automatically held in the Convertigo Session.

Will return the list of folders of the users root Directory with folder name, id and folder path.

#### Output
```
{
  "folders": [
    {
      "name": "Shared",
      "path": "/Shared",
      "id": "16cfc56d-eb6c-4420-8fc5-6deb6c0420c5"
    },
    {
      "name": "Imap Attachments",
      "path": "/Imap Attachments",
      "id": "78f06647-0b12-4dea-b066-470b12bdeae5"
    },
    ...
  ]
}
```

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>bindingType</td><td>Protocol used to communicate with a CMIS repository. By default, auto-detected with the url. Allowed values : AtomPub, Browser, auto.</td>
</tr>
<tr>
<td>password</td><td>Password to access the CMIS</td>
</tr>
<tr>
<td>repoID</td><td>The repository ID to access. use '-default-' for Alfresco</td>
</tr>
<tr>
<td>session_parameters</td><td>The parameters added to the session creation. In the array, add a string formated like this : "key;value"</td>
</tr>
<tr>
<td>url</td><td>Target CMIS URL, for example use http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/atom for Alfresco</td>
</tr>
<tr>
<td>user</td><td>User name to acess the CMIS</td>
</tr>
</table>

### DeleteObject

### Deletes a file or a folder from a CMIS repository.

Use docPath variable to search a document by its Path.
Or
Use docID variable to search a document by its Id.
Do not fill both variables or you will have an error.

#### Output
```
{
  "result": [{
    "id": "2f9c8608-c2ca-435a-9c86-08c2ca235ab1;1.0",
    "name": "camera4.gif",
    "creator": "admin",
    "creationDate": "2025-06-04T16:33:17Z",
    "fileSize": 22982,
    "mimeType": "image/gif",
    "properties": [
      {
        "id": "alfcmis:nodeRef",
        "name": "Alfresco Node Ref",
        "value": "workspace://SpacesStore/2f9c8608-c2ca-435a-9c86-08c2ca235ab1"
      },
      {
        "id": "cmis:isImmutable",
        "name": "Is Immutable",
        "value": false
      },
      ...
    ]
  }]
}
```

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>allVersions</td><td>If true, deletes all the document versions.<br/>
If false, deletes only the last version or only the provided version with the docID like: '5d47bb40-e241-4fe7-87bb-40e2416fe76a;1.0'</td>
</tr>
<tr>
<td>docID</td><td>CMIS ID of the file to delete. For example '30d4ef19-c3c2-4611-94ef-19c3c2e6114e'</td>
</tr>
<tr>
<td>docPath</td><td>CMIS Path of the file to delete. For example '/MyFolder/Myfile.doc'</td>
</tr>
</table>

### GetFile

Gets a file from CMIS repository. The file will be retrieved and saved in a temp directory. When you finish using this file you should delete it. The sequence will return the full path of the output file.

Use docPath variable to search a document by its Path.
Or
Use docID variable to search a document by its Id.
Do not fill both variables or you will have an error.

### Output
```
{
  "result": [{
    "filePath": "C:\\Users\\grego\\AppData\\Local\\Temp\\C8oCMIS_11422265988976522516_camera4.gif",
    "id": "2f9c8608-c2ca-435a-9c86-08c2ca235ab1;1.0",
    "name": "camera4.gif",
    "creator": "admin",
    "creationDate": "2025-06-04T16:33:17Z",
    "fileSize": 22982,
    "mimeType": "image/gif",
    "properties": [
      {
        "id": "alfcmis:nodeRef",
        "name": "Alfresco Node Ref",
        "value": "workspace://SpacesStore/2f9c8608-c2ca-435a-9c86-08c2ca235ab1"
      },
      {
        "id": "cmis:isImmutable",
        "name": "Is Immutable",
        "value": false
      },
      ...
    ]
  }]
}
```

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>docID</td><td>CMIS ID of the file to retrieve. For example '30d4ef19-c3c2-4611-94ef-19c3c2e6114e'</td>
</tr>
<tr>
<td>docPath</td><td>CMIS Path of the file to retrieve. For example '/MyFolder/Myfile.doc'</td>
</tr>
</table>

### GetFolders

#### Get children folders from folderID or folderPath folder.

#### Output
```
{
  "folders": {
    "parentFolder": "Company Home",
    "isRootFolder": true,
    "children": [
      {
        "id": "28759eee-6181-45ee-b59e-ee618185ee3d",
        "name": "Shared",
        "path": "/Shared",
        "description": "Folder to store shared stuff",
        "isRootFolder": false,
        "creator": "System",
        "creationDate": "2025-06-06T17:01:07Z"
      },
      ...
  	]
  }
}
```

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>folderID</td><td>Target ID in the CMIS. For example '16cfc56d-eb6c-4420-8fc5-6deb6c0420c5'</td>
</tr>
<tr>
<td>folderPath</td><td>Target path in the CMIS. For example '/MyFolder'</td>
</tr>
<tr>
<td>type</td><td>Type of Document to display. Can be "folder" only, "file" only or "both".</td>
</tr>
</table>

### PutFiles

### Puts a file in a CMIS repository. 

The Sequence will return the folder where the file has been placed.

Use folderPath variable to put a document in a folder by its Path.
Or
Use folderID variable to put a document in a folder by its Id.
Do not fill both variables or you will have an error.

Set one or multiple values for the filePaths variable to upload one or multiple documents.

If you set the fileNames values for each document, this will change the default file names from the filePaths variable.
Set 'null' or empty if you don't want to change file name.

You can add document properties using the properties variable.
Set 'null' or empty if you don't want to add properties for a file.
Set an array of objects with name/value key value pairs.
For example:
[{"name": "cmis:description", "value": "sample PDF file created by GV"}]
</pre>

#### Output
```
{
  "result": [{
    "filePath": "/Shared/myFile.pdf",
    "id": "1e1d7d10-a8cd-4e8f-9d7d-10a8cd2e8f10;1.0",
    "name": "myFile.pdf",
    "creator": "admin",
    "creationDate": "2025-06-06T15:37:05Z",
    "fileSize": 19475,
    "mimeType": "application/pdf",
    "properties": [
        {
          "id": "alfcmis:nodeRef",
          "name": "Alfresco Node Ref",
          "value": "workspace://SpacesStore/2f60771b-92bc-4ac4-a077-1b92bc5ac4b4"
        },
        ...
  }, ...]
}
```


**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>fileNames</td><td>(Optional) File names of the files to upload to CMIS. If none is provided, it will use the default file names from filePaths variable.</td>
</tr>
<tr>
<td>filePaths</td><td>Full Paths of the files to upload to CMIS. </td>
</tr>
<tr>
<td>folderID</td><td>Target ID in the CMIS. For example '16cfc56d-eb6c-4420-8fc5-6deb6c0420c5'</td>
</tr>
<tr>
<td>folderPath</td><td>Target path in the CMIS. For example '/MyFolder'</td>
</tr>
<tr>
<td>properties</td><td>(Optional) Properties array for the files. Each entry is a JSON object with the properties to set for the file.

```
{
	name: property_name,
	value: property_value
}
```

Set 'null' or empty if you don't want to add properties for a file.</td>
</tr>
<tr>
<td>secondaries</td><td>(Optional) Secondary Types array for the files. Each entry is a JSON array with the aspects to add for the file.


For example:
```
[
	"P:cm:titled",
	"P:custom:prop"
]
```

Set 'null' or empty if you don't want to add secondary Types for a file.</td>
</tr>
</table>

### UpdateProperties

Updates file properties in a CMIS repository.

Use docPath variable to search a document by its Path.
Or
Use docID variable to search a document by its Id.
Do not fill both variables or you will have an error.

You can pudate document properties using the properties variable.
Set an array of objects with name/value key value pairs.
For example:
[{"name": "cmis:description", "value": "sample PDF file created by GV"}]

### Output
```
{
  "result": [{
    "filePath": "/Shared/myFile.pdf",
    "id": "1e1d7d10-a8cd-4e8f-9d7d-10a8cd2e8f10;1.0",
    "name": "myFile.pdf",
    "creator": "admin",
    "creationDate": "2025-06-06T15:37:05Z",
    "fileSize": 19475,
    "mimeType": "application/pdf",
    "properties": [
        {
          "id": "alfcmis:nodeRef",
          "name": "Alfresco Node Ref",
          "value": "workspace://SpacesStore/2f60771b-92bc-4ac4-a077-1b92bc5ac4b4"
        },
        ...
  }, ...]
}
```


**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>docID</td><td>CMIS Id of the file whose properties are to be updated. For example '30d4ef19-c3c2-4611-94ef-19c3c2e6114e'</td>
</tr>
<tr>
<td>docPath</td><td>CMIS Path of the file whose properties are to be updated. For example '/MyFolder/Myfile.doc'</td>
</tr>
<tr>
<td>properties</td><td>(Optional) Properties array for the file. Each entry is a JSON object with the properties to update for the file.

[
	{
		name: property_name,
		value: property_value
	}
]</td>
</tr>
<tr>
<td>secondaries</td><td>(Optional) Secondary Types array for the files. JSON array with the aspects to add for the file.</td>
</tr>
</table>



