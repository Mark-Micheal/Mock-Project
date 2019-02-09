var Team = ["Lujine","Shiko","Adel","Ayman","Farid","Hosam","Mostafa","Omar","Yasser","Mark"]
console.log(Team)

function f1(number){
    //Lujine:find the name in the team with number of letters equal to the number given
    for(var i = 0; i < Team.length; i++){
        if(Team[i].length === number)
            return Team[i];
            //returns the team member
    }
}

function f2(name){
    //Shiko:find the team member position with the given name
	// 7amada
}

function f3(name,age){
    //Adel:change the name of the member who has the given name by adding the age given to him/her, ex: f3(lujine,20) returns Team=["lujine,20","shiko","Adel",etc..] 
    for(var i = 0; i < Team.length; i++){
        if(Team[i] ===name){
           Team[i]=""+name+","+age ;
        }
    }
}

function f4(first,second){
    //Ayman: combine the names of the team members having indices given by first and second in any way you like, ex: f4(0,1) returns "lujineshiko"
    return Team[first] + Team[Second];
    }

//Farid: sort the members of the team in descending order of name length using f1

//Hosam: determine if we have any members who have the same name using f2

//Mostafa: make sure each member's age is there in the list, if not, default is 20, using f3
function mostafa()
{
    for (i=0;i<Team.length;i++)
    {
        if(Team[i].search(",")===-1)
        {
            f3(Team[i],20);
        }
    }
}



function f8()
{
    //Omar: determine if the result of any member's name combination is funny or not. it is funny if the name is more than 7 characters, using f4

    var funny = false;

    for (var i = 0; !funny && i < Team.length; ++i)
        for (var j = i; !funny && j < Team.length; ++j)
            funny |= f4(i, j).length > 7;

    return funny;
}

//Yasser: create a function that combines the results of Farid,Hosam,Adel,Ayman's functions and display the array
// this is master

