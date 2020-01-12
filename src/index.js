//global style
import './stylesheet/index.scss';

//components
import './Functions/object';
import * as math from '~/Functions/math';
import * as array from "~/Functions/array";
import * as string from "~/Functions/string";

//Math Functions
math.Add(5,5);
math.Ceil(6.004);
math.Divide(6,4);
math.Floor(4.4);
math.Max([4,6,8,2]);
math.Mean([4,6,10,2]);
math.Min([4,6,2,8]);
math.Multiply(6,4);
math.Round(3.4);
math.Sum([4,6,8,2]);

// Array Functions
array.Compact([2, 0, 6, 7, NaN, 8, false, undefined]);
array.Concat([2, 3, 5, 6],3);
array.Difference([1,2,3,4,5,10],[2,4,5]);
array.Drop([1,2,3], 1);
const head = array.Head([1,2,3,4,5,6,7,8]);
array.Flatten([1, [2, [3, [4]], 5]]);
array.FlattenDeep([1,2,3,[1,2,3,4,[2,3,4]]],2);
array.Initial([1,2,3]);
array.Intersection([2, 1], [2, 3]);
array.Join(['Fire', 'Air', 'Water'], '~');
array.Last([1,2,3]);
array.Nth(['a','b','c','d'], 1,1);
array.ull(['a', 'b', 'c', 'a', 'b', 'c'],['a','c']);
array.Remove([1, 2, 3, 4]);
array.Slice([1,2,3,4,5,6,7,8],1,4);
array.Tail([1,2,3]);
array.Take([1,2,3], 2);
array.Uniq([2,1,2]);
array.Union([2], [1, 2]);

// String Functions
string.CamelCase('Foo Bar');
string.Capitalize('FRED');
string.EndWith('abc','b');
string.KebabCase('fooBar');
string.LowerCase('__FOO_BAR__');
string.LowerFirst('FRED');
string.Repeat('abc', 2);
string.SnakeCase('fooBar');
string.Split('a-b-c', 2);
string.StartCase('__FOO_BAR__');
string.ToLower('fooBar');
string.ToUpper('--foo-bar--');
string.Trim('  abc  ');
string.UpperCase('__foo_bar__');
string.UpperFirst('FRED');
