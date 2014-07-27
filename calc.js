//defining variable
op=0;
op_f=0; //0 means not pressed
text_value=0;
n1=0;
n2=0;
ans=0;
function press(v)
{

/*
10 +
11 - 
12 X
13 / 
14 =
1.once operator button is pressed store first number
2.set operator pressed flag
*/
if(v == 15)
{
	text_value = 0;
	text.innerHTML=0;
	n1=0;n2=0;op_f=0;op=0;ans=0;
}
else if(v == 10 || v == 11 || v == 12 || v == 13)
{
	//if flag is not set
	if(op_f == 0)
	{
		//Store first number
		n1 = text_value;
		//set op flag
		op_f=1;
		//store opertion code
		op=v;
		//sett text-value to 0
		text_value = 0;
		text.innerHTML=text_value;
		
	}
	else
	{
		//store the second number
		n2 = text_value;
		alert(op);
		if(op == 14)
		{
			
			text.innerHTML=0;
			op=v;
			return;
		}
		
		t1 = parseInt(n1);
		t2 = parseInt(n2);
		// do the operation	
		if(op == 10)
		{
			ans = t1 + t2;
		}
		if(op == 11)
		{
			ans = t1 - t2;
		}
		if(op == 12)
		{
			ans = t1 * t2;
		}
		if(op == 13)
		{
			ans = t1 / t2;
		}
		//set the text value but text-value to 0
		
		text.innerHTML = ans;
		text_value=0;
		
		n1 = ans;
		//store new op value
		op = v;
		n2=0;
		
	}
}
else if(v == 14)
{
		//store the second number
		n2 = text_value;
		
		t1 = parseInt(n1);
		t2 = parseInt(n2);
		// do the operation	
		if(op == 10)
		{
			ans = t1 + t2;
		}
		if(op == 11)
		{
			ans = t1 - t2;
		}
		if(op == 12)
		{
			ans = t1 * t2;
		}
		if(op == 13)
		{
			ans = t1 / t2;
		}
		//set the text value but text-value to 0
		
		text.innerHTML = ans;
		text_value=0;
		
		n1 = ans;
		//store new op value
		op=14;
		//op_f=0;
		n2=0;
		
}
else
{
	text_value = text_value*10 + v;
	text.innerHTML = text_value;
}
}