// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as ReasonReact from "reason-react/lib/es6/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("TodoList");

function make(todos, onToggle, onRemoveAll, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var match = Belt_List.length(todos);
              if (match !== 0) {
                var todoItems = Belt_List.map(todos, (function (todo) {
                        return React.createElement("li", {
                                    key: todo[/* id */0]
                                  }, React.createElement("label", undefined, React.createElement("input", {
                                            checked: todo[/* completed */2],
                                            type: "checkbox",
                                            onChange: (function () {
                                                return Curry._1(onToggle, todo);
                                              })
                                          }), todo[/* title */1]));
                      }));
                var todoElements = Belt_List.toArray(todoItems);
                return React.createElement("div", undefined, React.createElement("ul", undefined, todoElements), React.createElement("button", {
                                onClick: (function (e) {
                                    e.preventDefault();
                                    return Curry._1(onRemoveAll, e);
                                  })
                              }, "Usuń wszystko"));
              } else {
                return React.createElement("p", undefined, "Nie ma!");
              }
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
