//global style
import './stylesheet/index.scss';

//components
// import * as object from '~/js/Functions/object';
import * as math from '~/js/Functions/math';
import * as array from "~/js/Functions/array";
import * as string from "~/js/Functions/string";


//Math Functions
console.log(
  'math.Add(5,5)',
  math.Add(5,5)
);
console.log(
  'math.Ceil(6.004)',
  math.Ceil(6.004)
);
console.log(
  'math.Divide(6,4)',
  math.Divide(6,4)
);
console.log(
  'math.Floor(4.4)',
  math.Floor(4.4)
);
console.log(
  'math.Max([4,6,8,2])',
  math.Max([4,6,8,2])
);
console.log(
  'math.Mean([4,6,10,2])',
  math.Mean([4,6,10,2])
);
console.log(
  'math.Min([4,6,2,8])',
  math.Min([4,6,2,8])
);
console.log(
  'math.Multiply(6,4)',
  math.Multiply(6,4)
);
console.log(
  'math.Round(3.4)',
  math.Round(3.4)
);
console.log(
  'math.Sum([4,6,8,2])',
  math.Sum([4,6,8,2])
);

// Array Functions
console.log('array.Compact([2, 0, 6, 7, NaN, 8, false, undefined])',
  array.Compact([2, 0, 6, 7, NaN, 8, false, undefined])
);
console.log('array.Concat([2, 3, 5, 6],3)',
  array.Concat([2, 3, 5, 6],3)
);
console.log('array.Difference([1,2,3,4,5,10],[2,4,5])',
  array.Difference([1,2,3,4,5,10],[2,4,5])
);
console.log('array.Drop([1,2,3], 1)',
  array.Drop([1,2,3], 1)
);
console.log('array.Head([1,2,3,4,5,6,7,8])',
  array.Head([1,2,3,4,5,6,7,8])
);
console.log('array.Flatten([1, [2, [3, [4]], 5]])',
  array.Flatten([1, [2, [3, [4]], 5]])
);
console.log('array.FlattenDeep([1,2,3,[1,2,3,4,[2,3,4]]],2)',
  array.FlattenDeep([1,2,3,[1,2,3,4,[2,3,4]]],2)
);
console.log('array.Initial([1,2,3])',
  array.Initial([1,2,3])
);
console.log('array.Intersection([2, 1], [2, 3])',
  array.Intersection([2, 1], [2, 3])
);
console.log('array.Join([\'Fire\', \'Air\', \'Water\'], \'~\')',
  array.Join(['Fire', 'Air', 'Water'], '~')
);
console.log('array.Last([1,2,3])',
  array.Last([1,2,3])
);
console.log('array.Nth([\'a\',\'b\',\'c\',\'d\'], 1,1)',
  array.Nth(['a','b','c','d'], 1,1)
);
console.log('array.ull([\'a\', \'b\', \'c\', \'a\', \'b\', \'c\'],[\'a\',\'c\'])',
  array.ull(['a', 'b', 'c', 'a', 'b', 'c'],['a','c'])
);
console.log('array.Remove([1, 2, 3, 4])',
  array.Remove([1, 2, 3, 4])
);
console.log('array.Slice([1,2,3,4,5,6,7,8],1,4)',
  array.Slice([1,2,3,4,5,6,7,8],1,4)
);
console.log('array.Tail([1,2,3])',
  array.Tail([1,2,3])
);
console.log('array.Take([1,2,3], 2)',
  array.Take([1,2,3], 2)
);
console.log('array.Uniq([2,1,2])',
  array.Uniq([2,1,2])
);
console.log('array.Union([2], [1, 2])',
  array.Union([2], [1, 2])
);


// String Functions
console.log('string.CamelCase(\'Foo Bar\')',
  string.CamelCase('Foo Bar')
);
console.log('string.Capitalize(\'FRED\')',
  string.Capitalize('FRED')
);
console.log('string.EndWith(\'abc\',\'b\')',
  string.EndWith('abc','b')
);
console.log('string.KebabCase(\'fooBar\')',
  string.KebabCase('fooBar')
);
console.log('string.LowerCase(\'__FOO_BAR__\')',
  string.LowerCase('__FOO_BAR__')
);
console.log('string.LowerFirst(\'FRED\')',
  string.LowerFirst('FRED')
);
console.log('string.Repeat(\'abc\', 2)',
  string.Repeat('abc', 2)
);
console.log('string.SnakeCase(\'fooBar\')',
  string.SnakeCase('fooBar')
);
console.log('string.Split(\'a-b-c\', 2)',
  string.Split('a-b-c', 2)
);
console.log('string.StartCase(\'__FOO_BAR__\')',
  string.StartCase('__FOO_BAR__')
);
console.log('string.ToLower(\'fooBar\')',
  string.ToLower('fooBar')
);
console.log('string.ToUpper(\'--foo-bar--\')',
  string.ToUpper('--foo-bar--')
);
console.log('string.Trim(\'  abc  \')',
  string.Trim('  abc  ')
);
console.log('string.UpperCase(\'__foo_bar__\')',
  string.UpperCase('__foo_bar__')
);
console.log('string.UpperFirst(\'FRED\')',
  string.UpperFirst('FRED')
);

