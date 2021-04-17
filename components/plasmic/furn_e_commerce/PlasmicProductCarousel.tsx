// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i9bwxGcVwvFmrCRHUfpYDk
// Component: FoMKIc2f6tRqIr
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: -H4HAr-ZWrbc19/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: i9bwxGcVwvFmrCRHUfpYDk/projectcss
import * as sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: FoMKIc2f6tRqIr/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: tiAE91u0ED8FQL/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: YzchxcznUhSzRE/icon

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third";
};

export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
};

type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs;
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
);

export type PlasmicProductCarousel__ArgsType = {};
type ArgPropType = keyof PlasmicProductCarousel__ArgsType;
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCarousel__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
  className?: string;
}

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs;
  args: PlasmicProductCarousel__ArgsType;
  overrides: PlasmicProductCarousel__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___3GDaO)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__v7EdP, {
            [sty.box__slider_second__v7EdPwYnV]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___8HBzh
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__lxkxp,
              {
                [sty.box__slider_first__lxkxPgbNzT]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),
                [sty.box__slider_second__lxkxpwYnV]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),
                [sty.box__slider_third__lxkxPzcvsi]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__jxpkA
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__xmtJ)}>
            <div className={classNames(defaultcss.all, sty.box__uMqo)} />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__nunK8,
                {
                  [sty.box__slider_second__nunK8WYnV]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.box__slider_third__nunK8Zcvsi]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__fdty,
                {
                  [sty.box__slider_first__fdtygbNzT]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),
                  [sty.box__slider_second__fdtyWYnV]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.box__slider_third__fdtyzcvsi]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__wOdJs)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__a16OV)}
              text={"⊕ Add to cart"}
              type={"solidOrange" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__qwVa1)}
              text={"More Info"}
              type={"blankOrange" as const}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.box__vdkmn)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),
              [sty.img__slider_third]: hasVariant(variants, "slider", "third")
            })}
            role={"img"}
            src={
              hasVariant(variants, "slider", "third")
                ? "/plasmic/furn_e_commerce/images/slider3.png"
                : hasVariant(variants, "slider", "second")
                ? "/plasmic/furn_e_commerce/images/slider2.png"
                : "/plasmic/furn_e_commerce/images/slider1.png"
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__wwvos)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg___8Fcxy, {
            [sty.svg__slider_second___8FcxywYnV]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third___8FcxYzcvsi]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__zuGl, {
            [sty.svg__slider_first__zuGlgbNzT]: hasVariant(
              variants,
              "slider",
              "first"
            ),
            [sty.svg__slider_second__zuGlWYnV]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third__zuGlzcvsi]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__yY32U, {
            [sty.svg__slider_third__yY32Uzcvsi]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicProductCarousel__VariantsArgs;
  args?: PlasmicProductCarousel__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicProductCarousel__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
