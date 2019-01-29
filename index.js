//sequenstial model

const model = tf.sequential();

model.add(
  tf.layers.simpleRNN({
    //only need first layer
    inputShape: [20,4],
    //the number of units or nuerons
    units:20,
    //weight
    recurrentInitializer: "GlorotNormal",
  })
);

































// //define model
// function simpleAdd(input1, input2) {
//   //tidy is used to free up GPU memory once
//   //the fucntion returns
//   return tf.tidy(()=> {
//     const x1 = input1;
//     const x2 = input2;
//     const y = x1.add(x2);
//     return y;
//   });
// }
//
// //new 1 dimentsional tensors/arrays
// const data1 = tf.tensor1d([4, 6, 5, 9]);
// const data2 = tf.tensor1d([5, 4, 34, 21]);
//
// //using model add the tensors
// const result = simpleAdd(data1,data2);
// result.print();

























// //shape tensor with 4 rows of 2 columns
// const shape = [4,2];
//
// //feed data into the tensor
// const data = tf.tensor([4,6,5,9,13,25,1,7], shape);
//
// //set variables with zeros method
// const data2 = tf.variable(tf.zeros([8]));
//
//
// //print the data
// data2.print();
//
// //this is where we assign new walues with 1 dimension
// data2.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 3]));
// data2.print();
//
// //create 2 new 1 dimentsional tensors
// const data3 = tf.tensor1d([4, 6, 5, 9]);
// const data4 = tf.tensor1d([5, 4, 23, 45]);
//
// //pring the tensors we just created
// data3.print();
// data4.print();
//
// //adds mulitply and print the two tensors
// data3.add(data4).print();
// data3.mul(data4).print();
