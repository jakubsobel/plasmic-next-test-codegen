// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i9bwxGcVwvFmrCRHUfpYDk
// Component: 8P92VA4zPIL44
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
import MenuButton from "../../MenuButton"; // plasmic-import: lThZ0DGLoCner3/component
import LinkButton from "../../LinkButton"; // plasmic-import: -H4HAr-ZWrbc19/component
import IconLink from "../../IconLink"; // plasmic-import: BTteijPN9GHpHz/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2Ol3ghwyvjdFcI/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: i9bwxGcVwvFmrCRHUfpYDk/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: 8P92VA4zPIL44/css

import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: zTJETuT-dIYFyx/icon
import CogIcon from "./icons/PlasmicIcon__Cog"; // plasmic-import: sdukn4be9SA4Cg/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: zoso268iEwfMyI/icon

export type PlasmicHeader__VariantMembers = {
  expanded: "expanded";
};

export type PlasmicHeader__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  menuButton?: p.Flex<typeof MenuButton>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<"img">;
};

export interface DefaultHeaderProps {
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__expanded]: hasVariant(variants, "expanded", "expanded")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__g7Dua)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButton__expanded]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant(variants, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? ("expanded" as const)
                : undefined
            }
          />
        ) : null}

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(defaultcss.all, sty.link)}
          component={Link}
          href={"/" as const}
          platform={"nextjs"}
        >
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={"/plasmic/furn_e_commerce/images/plasmic.png"}
          />
        </p.PlasmicLink>

        {(
          hasVariant(variants, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? false
            : hasVariant(globalVariants, "screen", "mobile")
            ? false
            : true
        ) ? (
          <div
            className={classNames(defaultcss.all, sty.box__x9EKw, {
              [sty.box__expanded__x9EKwlKzeI]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__kjRr)}
              href={"/#home" as const}
              size={"small" as const}
              text={"Home"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__xKYy1)}
              href={"/#new-arrival" as const}
              size={"small" as const}
              text={"New Arrival"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___3Z2Gn)}
              href={"/#features" as const}
              size={"small" as const}
              text={"Features"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__xbC0M)}
              href={"/#blog" as const}
              size={"small" as const}
              text={"Blog"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__zyhx)}
              href={"/#contact" as const}
              size={"small" as const}
              text={"Contact"}
              type={"blankGray" as const}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ueVAq)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__unECw)}
            icon={
              <SearchIcon
                className={classNames(defaultcss.all, sty.svg___990Lq)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__uPMe)}
            icon={
              <CogIcon
                className={classNames(defaultcss.all, sty.svg__my37D)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__qJaWl)}
            icon={
              <ShoppingCartIcon
                className={classNames(defaultcss.all, sty.svg__hReYn)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__v92Do, {
            [sty.box__expanded__v92DolKzeI]: hasVariant(
              variants,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___9U7Sf)}
            text={"Home"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__ie0Li)}
            text={"New Arrival"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__sb7Ns)}
            text={"Features"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__mMaVm)}
            text={"Blog"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__oYdmh)}
            text={"Contact"}
            type={"blankGray" as const}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "link", "img"],
  menuButton: ["menuButton"],
  link: ["link", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuButton: typeof MenuButton;
  link: "a";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHeader__VariantsArgs;
  args?: PlasmicHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
