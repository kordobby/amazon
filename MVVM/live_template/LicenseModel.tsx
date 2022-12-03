import { useRef } from "react";
import { Page } from "@/lib/pagination";
import { useLocalObservable } from "mobx-react-lite";

export type LicenseStatus = "active" | "expired";
export interface License {
  id: number;
  imageUrl: string;
  title: string;
  publisher: string;
  author: string;
  category: string;
  paymentType: string;
  slot: string;
  price: string;
  dueDate: string;
  remainingSlot: string;
  status: LicenseStatus;
}

export interface LicenseModelProps {
  licenses?: License[];
  license?: License;
  pagination?: ReturnType<typeof Page>;
}

// substringBefore(fileNameWithoutExtension(),"View")
export const LicenseModel = (props: LicenseModelProps) => {
  return {
    licenses: props.licenses || ([] as License[]),
    license: props.license || ({} as License),
    pagination: Page({}),
    updateLicenses(licenses: License[]) {
      this.licenses = licenses;
    },
    addLicenses(licenses: License[]) {
      this.licenses = [...this.licenses, ...licenses];
    },
    updateLicense(license: License) {
      this.licenses = this.licenses.map((item) => {
        if (license.id === item.id) {
          return {
            ...item,
            ...license,
          };
        }
        return item;
      });
      this.license = license;
    },
    get last(): License {
      if (this.licenses.length > 0) {
        return this.licenses[this.licenses.length - 1];
      } else {
        return null;
      }
    },
  };
};

// * useLocalObservable :: Local Obeservable State를 만들기 위한 hook

export const useLicenseModelStore = (props: LicenseModelProps) => {
  return useLocalObservable(() => LicenseModel(props));
};

export const createLicenseStore = (props: Partial<LicenseModelProps> = {}) => {
  const stores = useRef({
    licenses: useLicenseModelStore(props),
  });

  return stores.current;
};

export type LicenseStoreType = ReturnType<typeof createLicenseStore>;
