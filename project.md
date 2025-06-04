
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


<details><summary><b>CheckConnect</b> : Check if the CMIS session is still alive</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") CheckConnect

Check if the CMIS session is still alive.

Will return isConnected true/false and the session name if available.
</p></blockquote></details>

<details><summary><b>Connect</b> : Has to be called before any other Sequence</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") Connect

Has to be called before any other Sequence. This will establish a Session between Convertigo and the Target CMIS (Alfresco). The session will be automatically held in the Convertigo Session.

Will return the list of folders of the users root Directory with folder name, id and folder path.



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

<details><summary><b>GetFile</b> : Gets a file from CMIS repository</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") GetFile

Gets a file from CMIS repository. The file will be retrieved and saved in a temp directory. When you finish using this file you should delete it. The sequence will return the full path of the output file.


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

<details><summary><b>PutFile</b> : Puts a file in a CMIS repository</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") PutFile

Puts a file in a CMIS repository. The Sequence will return the folder where the file has been placed.


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
File names of the files to upload to CMIS. If none is provided, it will use the default file names from filePaths variable.
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
</table>

</p></blockquote></details>
</p></blockquote></details>
