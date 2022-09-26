import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../common/Forms-control/FormsControl";
import {ContactsType} from "../../../../api/api";

export type ProfileDataFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormDataType>> = ({
                                                                                          handleSubmit,
                                                                                          initialValues
                                                                                      }) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button>Save</button>
            </div>

            <div>
                <div><b>Full name: </b></div>
                <Field placeholder="full name" name={"fullName"} component={Input}/>
                <div>
                    <b>About me: </b>
                    <Field placeholder="about me" name={"aboutMe"} component={Textarea}/>
                </div>
                <div>
                    <b>Looking job: </b>
                    <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
                </div>
                <div>
                    <b>My skills: </b>
                    <Field placeholder="my skills" name={"lookingForAJobDescription"} component={Textarea}/>
                </div>

                <div>
                    <b>Contacts: </b>
                    {initialValues.contacts && Object.keys(initialValues.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}:</b>
                            <Field placeholder={key} name={"contacts." + key} component={Input}/>
                        </div>
                    })}
                </div>
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileDataFormDataType>({form: "profileData"})(ProfileDataForm)