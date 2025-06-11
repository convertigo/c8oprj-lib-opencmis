
# ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/core/images/project_color_16x16.png?raw=true "Project") lib_OpenCMIS

# CMIS connector to Alfresco

This is the CMIS connector for Convertigo enabling to read, and put file in CMIS repositories such as Alfresco. The Connector relies on the Apache OpenCMIS library.


<details><summary><span style="color:DarkGoldenRod"><i>Connectors</i></span></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/connectors/images/sqlconnector_color_16x16.png?raw=true "SqlConnector") void

void connector, replace or don't use it

<details><summary><span style="color:DarkGoldenRod"><i>Transactions</i></span></summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/sqltransaction_color_16x16.png?raw=true "SqlTransaction") void

does nothing
</p></blockquote></details>
</p></blockquote></details>

<details><summary><span style="color:DarkGoldenRod"><i>Sequences</i></span></summary><blockquote><p>


<details><summary><b>CheckConnect</b> : <pre></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") CheckConnect

<pre>
Check if the CMIS session is still alive.

Will return isConnected true/false and the session name if available.
</pre>

### Output

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
</p></blockquote></details>

<details><summary><b>Connect</b> : <pre></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") Connect

<pre>
Has to be called before any other Sequence. This will establish a Session between Convertigo and the Target CMIS (Alfresco). The session will be automatically held in the Convertigo Session.

Will return the list of folders of the users root Directory with folder name, id and folder path.
</pre>

### Output
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

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bindingType
</td>
<td>
Protocol used to communicate with a CMIS repository. By default, auto-detected with the url. Allowed values : AtomPub, Browser, auto.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;password
</td>
<td>
Password to access the CMIS
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;repoID
</td>
<td>
The repository ID to access. use '-default-' for Alfresco
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/multivaluedvariable_color_16x16.png?raw=true "  alt="RequestableMultiValuedVariable" >&nbsp;session_parameters
</td>
<td>
The parameters added to the session creation. In the array, add a string formated like this : "key;value"
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;url
</td>
<td>
Target CMIS URL, for example use http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/atom for Alfresco
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;user
</td>
<td>
User name to acess the CMIS
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>DeleteFile</b> : <pre></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") DeleteFile

<pre>
Deletes a file from CMIS repository.

Use docPath variable to search a document by its Path.
Or
Use docID variable to search a document by its Id.
Do not fill both variables or you will have an error.
</pre>

### Output
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

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;allVersions
</td>
<td>
If true, deletes all the document versions.<br/>
If false, deletes only the last version or only the provided version with the docID like: '5d47bb40-e241-4fe7-87bb-40e2416fe76a;1.0'
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;docID
</td>
<td>
CMIS ID of the file to delete. For example '30d4ef19-c3c2-4611-94ef-19c3c2e6114e'
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;docPath
</td>
<td>
CMIS Path of the file to delete. For example '/MyFolder/Myfile.doc'
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>GetFile</b> : <pre></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") GetFile

<pre>
Gets a file from CMIS repository. The file will be retrieved and saved in a temp directory. When you finish using this file you should delete it. The sequence will return the full path of the output file.

Use docPath variable to search a document by its Path.
Or
Use docID variable to search a document by its Id.
Do not fill both variables or you will have an error.
</pre>

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

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;docID
</td>
<td>
CMIS ID of the file to retrieve. For example '30d4ef19-c3c2-4611-94ef-19c3c2e6114e'
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;docPath
</td>
<td>
CMIS Path of the file to retrieve. For example '/MyFolder/Myfile.doc'
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>PersonalFiles</b> : Get user Personal Files folders from root folder</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") PersonalFiles

Get user Personal Files folders from root folder.
</p></blockquote></details>

<details><summary><b>PutFiles</b> : <pre></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") PutFiles

<pre>
Puts a file in a CMIS repository. The Sequence will return the folder where the file has been placed.

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


<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/multivaluedvariable_color_16x16.png?raw=true "  alt="RequestableMultiValuedVariable" >&nbsp;fileNames
</td>
<td>
(Optional) File names of the files to upload to CMIS. If none is provided, it will use the default file names from filePaths variable.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/multivaluedvariable_color_16x16.png?raw=true "  alt="RequestableMultiValuedVariable" >&nbsp;filePaths
</td>
<td>
Full Paths of the files to upload to CMIS. 
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;folderID
</td>
<td>
Target ID in the CMIS. For example '16cfc56d-eb6c-4420-8fc5-6deb6c0420c5'
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;folderPath
</td>
<td>
Target path in the CMIS. For example '/MyFolder'
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/multivaluedvariable_color_16x16.png?raw=true "  alt="RequestableMultiValuedVariable" >&nbsp;properties
</td>
<td>
<pre>
(Optional) Properties list for the files. Each entry is a JSON object with the properties to set for the file.

{
	name: property_name,
	value: property_value
}
</pre>
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/multivaluedvariable_color_16x16.png?raw=true "  alt="RequestableMultiValuedVariable" >&nbsp;secondaries
</td>
<td>
<pre>
(Optional) Secondary Types list for the files. Each entry is a JSON array with the aspects to add for the file.
</pre>
</td>
</tr>
</table>

</p></blockquote></details>
</p></blockquote></details>
